import Image from './component/404/image/image'
import Form from './component/404/formSendMail/form'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Not Found',
  description: 'Not Found',
}
const NotFound = () => {

  return (
    <div className='w-full flex flex-col gap-y-16'>
      <Image />
      <Form />
    </div>
  )
}

export default NotFound