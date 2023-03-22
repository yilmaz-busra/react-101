// function User(props){
//     console.log(props);
//     return (
//         <h1>
//            {props.name} {props.surname} 
//         </h1>
//     )
// };

function User({ name, surname, age, friends, isLoggedIn}){
     console.log(name, surname, age, isLoggedIn);
    return (
        <>
         <h1> {
            isLoggedIn ?` ${name} ${surname} ${(age)}` : "hata"}
         
        </h1>

       {/* {
           friends.map((friend, index) => (
            <div key={index}>
             {index} -  {friend}
            </div>
            
        ) )
       }  */
       
        friends.map((friend) => {
            return <div key={friend.id}>
            {friend.name}
         </div>
        }  )
    } 
      
        </>
       
    );
}

export default User;