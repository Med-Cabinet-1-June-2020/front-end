import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const initialValues = {
    medical: {
        stress: false,
        depression: false,
        pain: false,
        insomnia: false,
        lackOfAppetite: false,
        muscleSpasms: false,
        cramps: false,
        eyePressure: false,
        inflammation: false,
        headaches: false,
        seizures: false,
        nausea: false,
        fatigue: false,
    },
    effects: {
        relaxed: false,
        hungry: false,
        happy: false,
        sleepy: false,
        euphoric: false,
        creative: false,
        energetic: false,
        talkative: false,
        uplifted: false,
        tingly: false,
        focused: false,
        aroused: false,
        giggly: false,
    }
}
const initialRecommendation = []
// const initialDisabled = true
const RecommendForm = () => {

    const [recommendation, setRecommendation] = useState(initialRecommendation)
    const [values, setValues] = useState(initialValues)
    // const [disabled, setDisabled] = useState(initialDisabled)

    const onCheckboxChange = evt => {
        const { name, checked } = evt.target

        setValues({
            medical: {
                ...values.medical,
                [name]: checked,
            },
            effects: {
                ...values.effects,
                [name]: checked,
            },
        })
    }
    const postNewRecommendation = (newRec) => {
        setRecommendation([...recommendation, newRec])
        setValues(initialValues)
    }
    const onSubmit = evt => {
        evt.preventDefault()

        const newRecommendation = {
            medical: Object.keys(values.medical)
                .filter(ailmentName => (values.medical[ailmentName] === true)),
                
            effects: Object.keys(values.effects)
                .filter(effectName => (values.effects[effectName] === true)),
        }
        postNewRecommendation(newRecommendation)
        console.log('newRecommendation -->', newRecommendation)
    }

    return (
        <div className='recform'>
            <form className='form-container' onSubmit={onSubmit}>
                <div className='medical'>
                    <h2>Medical Ailments</h2>
                    <label>stress
                        <input
                            name='stress'
                            type='checkbox'
                            onChange={onCheckboxChange}
                            checked={values.medical.stress}
                            
                        />
                    </label>
                    <label>depression
                        <input
                            name='depression'
                            type='checkbox'
                            onChange={onCheckboxChange}
                            checked={values.medical.depression}
                            
                        />
                    </label>
                    <label>pain
                        <input
                            name='pain'
                            type='checkbox'
                            onChange={onCheckboxChange}
                            checked={values.medical.pain}
                            
                        />
                    </label>
                    <label>insomnia
                        <input
                            name='insomnia'
                            type='checkbox'
                            onChange={onCheckboxChange}
                            checked={values.medical.insomnia}
                            
                        />
                    </label>
                    <label>lack of appetite
                        <input
                            name='lackOfAppetite'
                            type='checkbox'
                            onChange={onCheckboxChange}
                            checked={values.medical.lackOfAppetite}
                            
                        />
                    </label>
                    <label>muscle spasms
                        <input
                            name='muscleSpasms'
                            type='checkbox'
                            onChange={onCheckboxChange}
                            checked={values.medical.muscleSpasms}
                            
                        />
                    </label>
                    <label>cramps
                        <input
                            name='cramps'
                            type='checkbox'
                            onChange={onCheckboxChange}
                            checked={values.medical.cramps}
                            
                        />
                    </label>
                    <label>eye pressure
                        <input
                            name='eyePressure'
                            type='checkbox'
                            onChange={onCheckboxChange}
                            checked={values.medical.eyePressure}
                            
                        />
                    </label>
                    <label>inflammation
                        <input
                            name='inflammation'
                            type='checkbox'
                            onChange={onCheckboxChange}
                            checked={values.medical.inflammation}
                            
                        />
                    </label>
                    <label>headaches
                        <input
                            name='headaches'
                            type='checkbox'
                            onChange={onCheckboxChange}
                            checked={values.medical.headaches}
                            
                        />
                    </label>
                    <label>seizures
                        <input
                            name='seizures'
                            type='checkbox'
                            onChange={onCheckboxChange}
                            checked={values.medical.seizures}
                            
                        />
                    </label>
                    <label>nausea
                        <input
                            name='nausea'
                            type='checkbox'
                            onChange={onCheckboxChange}
                            checked={values.medical.nausea}
                            
                        />
                    </label>
                    <label>fatigue
                        <input
                            name='fatigue'
                            type='checkbox'
                            onChange={onCheckboxChange}
                            checked={values.medical.fatigue}
                            
                        />
                    </label>
                </div>
            </form>
            <form className='form-container' onSubmit={onSubmit}>

                <div className='effects'>
                    <h2>Desired Effects</h2>
                    <label>relaxed
                        <input
                            name='relaxed'
                            type='checkbox'
                            onChange={onCheckboxChange}
                            checked={values.effects.relaxed}
                            
                        />
                    </label>
                    <label>hungry
                        <input
                            name='hungry'
                            type='checkbox'
                            onChange={onCheckboxChange}
                            checked={values.effects.hungry}
                            
                        />
                    </label>
                    <label>happy
                        <input
                            name='happy'
                            type='checkbox'
                            onChange={onCheckboxChange}
                            checked={values.effects.happy}
                            
                        />
                    </label>
                    <label>sleepy
                        <input
                            name='sleepy'
                            type='checkbox'
                            onChange={onCheckboxChange}
                            checked={values.effects.sleepy}
                            
                        />
                    </label>
                    <label>euphoric
                        <input
                            name='euphoric'
                            type='checkbox'
                            onChange={onCheckboxChange}
                            checked={values.effects.euphoric}
                            
                        />
                    </label>
                    <label>creative
                        <input
                            name='creative'
                            type='checkbox'
                            onChange={onCheckboxChange}
                            checked={values.effects.creative}
                            
                        />
                    </label>
                    <label>energetic
                        <input
                            name='energetic'
                            type='checkbox'
                            onChange={onCheckboxChange}
                            checked={values.effects.energetic}
                            
                        />
                    </label>
                    <label>talkative
                        <input
                            name='talkative'
                            type='checkbox'
                            onChange={onCheckboxChange}
                            checked={values.effects.talkative}
                            
                        />
                    </label>
                    <label>uplifted
                        <input
                            name='uplifted'
                            type='checkbox'
                            onChange={onCheckboxChange}
                            checked={values.effects.uplifted}
                            
                        />
                    </label>
                    <label>tingly
                        <input
                            name='tingly'
                            type='checkbox'
                            onChange={onCheckboxChange}
                            checked={values.effects.tingly}
                            
                        />
                    </label>
                    <label>focused
                        <input
                            name='focused'
                            type='checkbox'
                            onChange={onCheckboxChange}
                            checked={values.effects.focused}
                            
                        />
                    </label>
                    <label>aroused
                        <input
                            name='aroused'
                            type='checkbox'
                            onChange={onCheckboxChange}
                            checked={values.effects.aroused}
                            
                        />
                    </label>
                    <label>giggly
                        <input
                            name='giggly'
                            type='checkbox'
                            onChange={onCheckboxChange}
                            checked={values.effects.giggly}
                            
                        />
                    </label>
                </div>
                <Link to={'/dashboard/strainlist'}>
                    <button
                        //  disabled={disabled}
                        >submit</button>
                </Link>

            </form>
        </div>
    )
}
export default RecommendForm