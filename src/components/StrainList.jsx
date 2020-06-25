import React, { useState, useEffect } from 'react'
import Axios from 'axios'

const StrainList = () => {

    const [strainList, setStrainList] = useState([])

    useEffect(() => {
        const getStrains = () => {
            Axios.get('https://medcabinetjune2020.herokuapp.com/strains/all')
                .then(res => {
                    setStrainList(res.data)
                })
                .catch(err => {
                    console.log("getStrains -> err", err) 
                })
        }
        getStrains()
    }, [])

    return (
        <div className='entry'>
            <div className='strain-list'>
            <h3 className='entry'>Strains</h3>
                {strainList.map(strain => (
                    <div className='strain'>
                        <h2>{strain.strain}</h2>
                        <p>Race: {strain.race}</p>
                        <p>Type: {strain.type}</p>
                        <p>Description:<br/>{strain.description}</p>
                        <p>Flavors: {strain.flavors[0]}  {strain.flavors[1]}  {strain.flavors[2]}</p>

                        <p>Medicinal Uses: {strain.medical[0]}  {strain.medical[1]}  {strain.medical[2]}  {strain.medical[3]}  {strain.medical[4]}  {strain.medical[5]}</p>

                        <p>Positive Effects: {strain.positive[0]}  {strain.positive[1]}  {strain.positive[2]}  {strain.positive[3]}  {strain.positive[4]}  {strain.positive[5]}</p>

                        <p>Negative Effects: {strain.negative[0]}  {strain.negative[1]}  {strain.negative[2]}  {strain.negative[3]}  {strain.negative[4]}  {strain.negative[5]}</p>

                        <p>Rating: {strain.rating}/5</p>


                      
                    </div>
                ))}
            </div>
        </div>
    )
}

export default StrainList