import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { changeName, changeCost, changeDescription } from '../store/slices/formSlice';
import { addCourse } from '../store/slices/courseSlice';


function CourseForm() {
    const dispatch = useDispatch()
    const { name, description, cost } = useSelector((state) => {
        return {
            name: state.form.name,
            description: state.form.description,
            cost: state.form.cost
        };
    });

    const handleSubmit = (event) => {
        debugger;
        event.preventDefault();
        dispatch(addCourse({ name, description, cost }));
    };

    console.log(name, description, cost);
    return (
        <div className="courseForm panel">
            <h4 className='subtitle is-3'>Kurs ekle</h4>
            <form onSubmit={handleSubmit}>
                <div className='field-group'>
                    <div className='field'>
                        <label className='label'>Ad</label>
                        <input className='input is-expanded' onChange={(event) => { dispatch(changeName(event.target.value)); }} value={name} />
                    </div>
                    <div className='field'>
                        <label className='label'>Açıklama</label>
                        <textarea value={description} className='input is-expanded' onChange={(event) => { dispatch(changeDescription(event.target.value)); }} />
                    </div>
                    <div className='field'>
                        <label className='label'>Fiyat</label>
                        <input value={cost} className='input is-expanded' type='number' onChange={(event) => { dispatch(changeCost(parseInt(event.target.value))); }} />
                    </div>
                </div>
                <div className='field'>
                    <button className='button is-primary'>Kaydet</button>
                </div>
            </form>
        </div>
    )
}

export default CourseForm