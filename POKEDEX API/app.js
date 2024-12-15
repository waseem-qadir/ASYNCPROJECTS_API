const searchbtn= document.getElementById('searchbtn') 
const pokeimgage = document.getElementById('pokeimg')


const fetchpokedata = async () => {
    const searchinput = document.getElementById('seachbarInput').value.toLowerCase();
try{
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchinput}`)
    if(!response.ok){
        throw new Error('could not fetch')
    }
    const pokedata = await response.json()
    console.log(pokedata)
    const pokeImg = pokedata.sprites.front_default;
    pokeimgage.src = pokeImg

    const hpVal = pokedata.stats[0].stat.name
    const hpStat = pokedata.stats[0].base_stat;
    
    const hp = `${hpVal} : ${hpStat}`
    document.getElementById('hp').innerHTML = hp 
     
    
    const  moveval = pokedata.stats[3].stat.name;
    const movestat = pokedata.stats[3].base_stat;
    
    const move = `${moveval} : ${movestat}`
    document.getElementById('move').innerHTML = move

    
    
    const attackval = pokedata.stats[1].stat.name;
    const attackstat = pokedata.stats[1].base_stat;

    const attack = `${attackval} : ${attackstat}`

    document.getElementById('attack').innerHTML = attack
    

    const defenceval = pokedata.stats[2].stat.name;
    const defencestat = pokedata.stats[2].base_stat;

    const defence = `${defenceval} : ${defencestat}`

    document.getElementById('defence').innerHTML = defence



    

} 
    
catch(error){
console.error(error)
}

}

