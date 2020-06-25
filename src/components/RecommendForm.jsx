import React, { useState } from 'react'
const initialValues = {
    ailments: {
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
            ailments: {
                ...values.ailments,
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
            ailments: Object.keys(values.ailments)
                .filter(ailmentName => (values.ailments[ailmentName] === true)),
                
            effects: Object.keys(values.effects)
                .filter(effectName => (values.effects[effectName] === true)),
        }
        postNewRecommendation(newRecommendation)
        console.log('newRecommendation -->', newRecommendation)
    }

    return (
        <div className='entry'>
            <form className='form-container' onSubmit={onSubmit}>
                <div className='ailments'>
                    <h3>Medical Ailments</h3>
                    <label>stress
                        <input
                            name='stress'
                            type='checkbox'
                            onChange={onCheckboxChange}
                            checked={values.ailments.stress}
                            
                        />
                    </label>
                    <label>depression
                        <input
                            name='depression'
                            type='checkbox'
                            onChange={onCheckboxChange}
                            checked={values.ailments.depression}
                            
                        />
                    </label>
                    <label>pain
                        <input
                            name='pain'
                            type='checkbox'
                            // onChange={onCheckboxChange}
                            // checked={values.ailments.pain}
                            
                        />
                    </label>
                    <label>insomnia
                        <input
                            name='insomnia'
                            type='checkbox'
                            // onChange={onCheckboxChange}
                            // checked={values.ailments.insomnia}
                            
                        />
                    </label>
                    <label>lack of appetite
                        <input
                            name='lackOfAppetite'
                            type='checkbox'
                            // onChange={onCheckboxChange}
                            // checked={values.ailments.}
                            
                        />
                    </label>
                    <label>muscle spasms
                        <input
                            name='muscleSpasms'
                            type='checkbox'
                            // onChange={onCheckboxChange}
                            // checked={values.ailments.}
                            
                        />
                    </label>
                    <label>cramps
                        <input
                            name='cramps'
                            type='checkbox'
                            // onChange={onCheckboxChange}
                            // checked={values.ailments.}
                            
                        />
                    </label>
                    <label>eye pressure
                        <input
                            name='eyePressure'
                            type='checkbox'
                            // onChange={onCheckboxChange}
                            // checked={values.ailments.}
                            
                        />
                    </label>
                    <label>inflammation
                        <input
                            name='inflammation'
                            type='checkbox'
                            // onChange={onCheckboxChange}
                            // checked={values.ailments.}
                            
                        />
                    </label>
                    <label>headaches
                        <input
                            name='headaches'
                            type='checkbox'
                            // onChange={onCheckboxChange}
                            // checked={values.ailments.}
                            
                        />
                    </label>
                    <label>seizures
                        <input
                            name='seizures'
                            type='checkbox'
                            // onChange={onCheckboxChange}
                            // checked={values.ailments.}
                            
                        />
                    </label>
                    <label>nausea
                        <input
                            name='nausea'
                            type='checkbox'
                            // onChange={onCheckboxChange}
                            // checked={values.ailments.}
                            
                        />
                    </label>
                    <label>fatigue
                        <input
                            name='fatigue'
                            type='checkbox'
                            // onChange={onCheckboxChange}
                            // checked={values.ailments.}
                            
                        />
                    </label>
                </div>
            </form>
            <form className='form-container' onSubmit={onSubmit}>

                <div className='effects'>
                    <h3>Desired Effects</h3>
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
                            // onChange={onCheckboxChange}
                            // checked={values.desired.}
                            
                        />
                    </label>
                    <label>sleepy
                        <input
                            name='sleepy'
                            type='checkbox'
                            // onChange={onCheckboxChange}
                            // checked={values.desired.}
                            
                        />
                    </label>
                    <label>euphoric
                        <input
                            name='euphoric'
                            type='checkbox'
                            // onChange={onCheckboxChange}
                            // checked={values.desired.}
                            
                        />
                    </label>
                    <label>creative
                        <input
                            name='creative'
                            type='checkbox'
                            // onChange={onCheckboxChange}
                            // checked={values.desired.}
                            
                        />
                    </label>
                    <label>energetic
                        <input
                            name='energetic'
                            type='checkbox'
                            // onChange={onCheckboxChange}
                            // checked={values.desired.}
                            
                        />
                    </label>
                    <label>talkative
                        <input
                            name='talkative'
                            type='checkbox'
                            // onChange={onCheckboxChange}
                            // checked={values.desired.}
                            
                        />
                    </label>
                    <label>uplifted
                        <input
                            name='uplifted'
                            type='checkbox'
                            // onChange={onCheckboxChange}
                            // checked={values.desired.}
                            
                        />
                    </label>
                    <label>tingly
                        <input
                            name='tingly'
                            type='checkbox'
                            // onChange={onCheckboxChange}
                            // checked={values.desired.}
                            
                        />
                    </label>
                    <label>focused
                        <input
                            name='focused'
                            type='checkbox'
                            // onChange={onCheckboxChange}
                            // checked={values.desired.}
                            
                        />
                    </label>
                    <label>aroused
                        <input
                            name='aroused'
                            type='checkbox'
                            // onChange={onCheckboxChange}
                            // checked={values.desired.}
                            
                        />
                    </label>
                    <label>giggly
                        <input
                            name='giggly'
                            type='checkbox'
                            // onChange={onCheckboxChange}
                            // checked={values.desired.}
                            
                        />
                    </label>
                </div>
                <button
                    //  disabled={disabled}
                     >submit</button>

            </form>
        </div>
    )
}
export default RecommendForm