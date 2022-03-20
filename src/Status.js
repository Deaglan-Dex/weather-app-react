import Cloud from './Vector.png'

const Status = () => {
  return (
    <div className='statusdiv'>
        <img className='iconstatus' src = {Cloud} alt = "Null"/>
        <p id='status'>the sky is clear</p>
        {/* <p id = "status"><img src = {Cloud} alt = "Null"/> The sky is </p> */}
    </div>
  )
}

export default Status