import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function CourseList() {
  const [title, setTitle] = useState();

  const courses = useSelector(state => state.data);
  const dispatch = useDispatch();

  function addCourse() {
    dispatch({ type: 'ADD_COURSE', title: title })
  }

  return(
    <>
      <ul>
        {
          courses.map(course => <li key={course}>{course}</li>)
        }
      </ul>
      <input type="text" onChange={(e) => {setTitle(e.target.value)}} />
      <button type="button" onClick={addCourse}>
        Adicionar curso
      </button>
    </>
  )
}

export default CourseList;