import { useState } from "react";

// function InputExample(){
//     const[name, setName]= useState("Busra");
//     const onChangeName= (event)=> setName(event.target.value); 

//     const[surname, setSurname] = useState("Yilmaz");
//     const onChangeSurname=(event)=> setSurname(event.target.value);
//     // onChange ile input içerisine ekleme yapabiliyoruz.
//     // onChange olmazsa value degerine ekleme yapılamaz.
//     return(
    
//        <div>
//         Name <br />
//         <input  value={name} onChange={onChangeName}/>

//         <br />

//         Surname <br />
//         <input value={surname} onChange={onChangeSurname}/>
//         <br />

//         {name} {surname}
//        </div> 
//     );
// };

// tek state ve tek fonsiyon ile yapımı
function InputExample(){
    const[form, setForm] = useState({name:"",surname:""});
    const onChangeInput = (e)=>{
        console.log(e.target.name);

        setForm({ ...form, [e.target.name]:e.target.value });
    };

    return(
        <div>
            Name <br />
            <input name="name" value={form.name} onChange={onChangeInput} />
            <br />
            <br />
            Surname <br />
            <input name="surname" value={form.surname} onChange={onChangeInput} />

            <br />
            <br />
            {form.name} {form.surname}
        </div>
    )
}
export default InputExample;