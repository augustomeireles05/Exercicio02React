import React from 'react'

export default props => {
    return (
        <React.Fragment> 
            <h2>{props.principal}</h2>
            <h2>{props.secundario}</h2>
        </React.Fragment>
    )
}

//Ou teria essas duas opções também
//Os demais não precisam do import da linha 1

// export default props => {
//     return (
//         <> 
//             <h2>{props.principal}</h2>
//             <h2>{props.secundario}</h2>
//         </>
//     )
// }

// export default props => {
//     return (
//         <div>
//             <h2>{props.principal}</h2>
//             <h2>{props.secundario}</h2>
//         </div>   
//     )
// }