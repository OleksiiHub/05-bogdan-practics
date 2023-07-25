
function People(props) {   //берется props с Array где происходит перебор массива
    const {
        firstName,
        lastName,
        email,
        image,
        isAdmin,
        gender,
        ipAddress
    } = props

    return (
            <div className="card" >
                <h2>{firstName} {lastName}</h2>
                <h3>{email}</h3>
                <img src={image} alt={firstName} />
                {gender === 'Female' ? (<h5 className="pink">Female</h5>) : (<h5 className="blue">Male</h5>)}
                <h6>{isAdmin ? 'Admin: True' : 'Admin: False'}</h6>
                <h6>{ipAddress}</h6>
            </div >
    )
}

export default People

// Загрузка карточки в случае если isAdmin = true
// {isAdmin ? (<div className="card" >

//     <h2>{firstName} {lastName}</h2>
//     <h3>{email}</h3>
//     <img src={image} alt={firstName} />
//     {gender === 'Female' ? (<h5 className="pink">Female</h5>) : (<h5 className="blue">Male</h5>)}
// </div >) : (undefined)}
// </div> 

