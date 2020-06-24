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
                    <div className='entry'>
                        <h2>{strain.strain}</h2>
                        <p>Race: {strain.race}</p>
                        <p>Type: {strain.type}</p>
                        <p>Description:<br/>{strain.description}</p>
                        <p>Flavors: {strain.flavors[0]},  {strain.flavors[1]},  {strain.flavors[2]}</p>
                        <p>Medicinal Uses: {strain.medical[0]},  {strain.medical[1]},  {strain.medical[2]}</p>
                        <p>Positive Effects: {strain.positive[0]},  {strain.positive[1]},  {strain.positive[2]}</p>
                        <p>Negative Effects: {strain.negative[0]},  {strain.negative[1]},  {strain.negative[2]}</p>
                        <p>Rating: {strain.rating}/5</p>


                      
                    </div>
                ))}
            </div>
        </div>
    )
}

export default StrainList