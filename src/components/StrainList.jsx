import React, { useState, useEffect } from 'react'
import Axios from 'axios'

const StrainList = () => {

    const [strainList, setStrainList] = useState([])

    useEffect(() => {
        const getStrains = () => {
            Axios.get('https://medcabinetjune2020.herokuapp.com/strains/all')
                .then(res => {
                    setStrainList(res.data)
                    console.log("getStrains -> res.data", res.data)
                })
                .catch(err => {
                    console.log("getStrains -> err", err) 
                })
        }
        getStrains()
    }, [])
    console.log("StrainList -> strainList", strainList)

    return (
        <div className='container'>
            <h3>Strains</h3>
            <div className='strain-list'>
                {strainList.map(strain => (
                    <div>
                        <h2>{strain.strain}</h2>
                        <p>race: {strain.race}</p>
                        <p>type: {strain.type}</p>
                        <p>flavors: {strain.flavors[0]},  {strain.flavors[1]},  {strain.flavors[2]}</p>
                        <p>description:</p>
                        <p>{strain.description}</p>


                      
                    </div>
                ))}
            </div>
        </div>
    )
}

export default StrainList