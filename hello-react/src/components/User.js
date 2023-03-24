// function User(props){
//     console.log(props);
//     return (
//         <h1>
//            {props.name} {props.surname} 
//         </h1>
//     )
// };
import  PropTypes  from 'prop-types';
function User({ name, surname, age, friends,address, isLoggedIn}){
     if(!isLoggedIn){
        return <div>Giris yapamdın</div>;
     }
    return (
        <>
         <h1> {isLoggedIn ?` ${name} ${surname} ${(age)}` : "hata"}
         
        </h1>
     {address.title} {address.zip}
     <br/>
     <br/>

        {
//friends.map((friend, index) => (
           // <div key={index}>
            // {index} -  {friend}
           // </div>   
           //) )

           friends && friends.map((friend) => {
            return <div key={friend.id}>
            {friend.name}
         </div>})
        }
       
        </>
       
    );
}
User.propTypes={
    name:PropTypes.string.isRequired, //zorunlu alan belirtmek icin isRequired
    surname: PropTypes.string.isRequired,
    isLoggedIn:PropTypes.bool.isRequired,
    age: PropTypes.oneOfType([PropTypes.string, PropTypes.number ]).isRequired,
    //birden fazla veri tipi girisini saglamak icin oneOfType adında bir tanım var.
    friends:PropTypes.array,
    address:PropTypes.shape({
        title:PropTypes.string,
        zip:PropTypes.number
    })

  
  };
User.defaultProps={ //eger tanımlanmamıssa bir prop bu kısımda bilinmeyen propa deger atarız
    isLoggedIn:false,
    name:'İsimsiz'

}
  
export default User;