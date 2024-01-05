import React from 'react'
export default function Classpractice() {
    const name = 'Hello World';
    const obj = {
        name: 'Hello World Object'
    }
    const data = ['We', 'are', 'United'];
    const list = [
        { name: 'Hello World 1' },
        { name: 'Hello World 2' },
        { name: 'Hello World 3' }
    ]
    const complex = [
        {
            company: 'XYZ',
            jobs: ['Javascript', 'React']
        },
        {
            company: 'ABC',
            jobs: ['Angular Js', 'Ionic']
        }
    ]
    return (
        <div>
            <h2>Class Practice </h2>
            <p>Task 1 : {name}</p>
            {
                // obj.forEach(element => {
                //   console.log(element)  
                // })
            }
             <p>Task 2 : {
                obj.name
                }</p>

            {
                data.map((value, index) => {
                    return <p key={index}>Task 3 : {value}</p>
                })
            }
            {
                list.map((data, index) => {
                    let a = data;
                    for (let key in a) {
                        return <p key={index}> Task 4 : {
                            a[key]
                        }
                        </p>
                    }
                })
            }
                <h4>Task 5</h4>
            <table className='table table-striped table-bordered container' style={{border:'2px solid'}} >
                <thead>
                <tr><th>Company </th> <th colSpan={2}>Jobs</th></tr>
                </thead>
                <tbody>
                {
                    complex.map((data) => {

                        return (
                            <tr><td>{data.company}</td><td>{data.jobs[0]}</td><td>{data.jobs[1]}</td></tr>
                        )
                    })
                }
                </tbody>
            </table>
           
            {/* {
            
            // list.forEach(element => {
            //     let a = element;
            //     for(let key in a){
            //         console.log(a[key])
            //     }
            // })
        } */}
        </div>
    )
}
