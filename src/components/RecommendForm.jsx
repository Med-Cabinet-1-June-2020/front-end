import React from 'react'

const RecommendForm = () => {
    return (
        <div className='entry'>
            <form className='form-container'>
                <div className='ailment-form'>
                    <h3>Medical Ailments</h3>
                    <label>stress
                        <input
                            name='stress'
                            type='checkbox'
                        />
                    </label>
                    <label>depression
                        <input
                            name='depression'
                            type='checkbox'
                        />
                    </label>
                    <label>pain
                        <input
                            name='pain'
                            type='checkbox'
                        />
                    </label>
                    <label>insomnia
                        <input
                            name='insomnia'
                            type='checkbox'
                        />
                    </label>
                    <label>lack of appetite
                        <input
                            name='lack-of-appetite'
                            type='checkbox'
                        />
                    </label>
                    <label>muscle spasms
                        <input
                            name='muscle-spasms'
                            type='checkbox'
                        />
                    </label>
                    <label>cramps
                        <input
                            name='cramps'
                            type='checkbox'
                        />
                    </label>
                    <label>eye pressure
                        <input
                            name='eye pressure'
                            type='checkbox'
                        />
                    </label>
                    <label>inflamation
                        <input
                            name='inflamation'
                            type='checkbox'
                        />
                    </label>
                    <label>headaches
                        <input
                            name='headaches'
                            type='checkbox'
                        />
                    </label>
                    <label>seizures
                        <input
                            name='seizures'
                            type='checkbox'
                        />
                    </label>
                    <label>nausea
                        <input
                            name='nausea'
                            type='checkbox'
                        />
                    </label>
                    <label>fatigue
                        <input
                            name='fatigue'
                            type='checkbox'
                        />
                    </label>
                </div>
                <div className='effect-form'>
                    <h3>Desired Effects</h3>
                    <label>Depression
                        <input
                            name='depression'
                            type='checkbox'
                        />
                    </label>
                    <label>Depression
                        <input
                            name='depression'
                            type='checkbox'
                        />
                    </label>
                </div>
            </form>
        </div>
    )
}
export default RecommendForm