import profile from '../../../assets/images/img/profile-2.jpg'
import { GrNotification } from "react-icons/gr"
import CreatePost from '../../common/CreatePost'
function ClientProfile() {
  return (
    // Change that Gap later
    <div className="flex items-center gap-4 px-2">
      <CreatePost>Create Post</CreatePost>
      <button className='relative p-2 rounded-md bg-background'>
        <GrNotification/>
        <span className='p-[5px] absolute bg-secondary -top-1 right-0 rounded-full'></span>
      </button>
      <div className="flex-grow flex flex-col gap-0">
        <h1 className='text-sm font-bold tracking-wide text-text' >Flivian Mwirigi</h1>
        <span className='text-[10px] font-semibold text-text-secondary tracking-wide'>Client</span>
      </div>
      <div>
        <img className='w-12 h-12 rounded-full border-2 border-secondary' src={profile} alt="Client profile image" />
      </div>
    </div>
  )
}

export default ClientProfile