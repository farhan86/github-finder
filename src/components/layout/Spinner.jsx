import spinner from './assets/spinner.gif'

function Spinner() {
  return (
    <div className='w-20 mx-auto'>
      <img src={spinner} alt='Loading...' className='text-center mx-auto' />
    </div>
  )
}
export default Spinner
