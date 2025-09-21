import { formatDate } from '@/src/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { EyeIcon } from 'lucide-react'
import React from 'react'

const StartupCard = ({ post } : { post: StartupTypeCard }) => {

  const { _createdAt, views, author: { _id: authorId , name }, title, category, _id, description, image } = post;

  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup-card-date">
          {formatDate( _createdAt )}
        </p>
        <div className="flex gap-1.5">
          <EyeIcon className='size-6 text-primary' />
          <span className="text-16-medium"> { views } </span>
        </div>
      </div>

      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${ authorId }`} >
            <p className="text-16 font-semibold line-clamp-1 text-black-100 hover:underline"> { name } </p>         
          </Link>
          <Link href={`/startup/${_id}`}>
            <h3 className='text-2xl font-semibold line-clamp-1'> { title } </h3>
          </Link>
        </div>
        <Link href={`/user/${authorId}`}>
          <Image src="https://placehold.co/48x48" alt='placeholder' width={48} height={48} className='rounded-full' />
        </Link>
      </div>

      <Link href={`/startup/${_id}`}>
        <p className="startup-card_desc"> { description } </p>
        <img src={image} alt='placeholder' className='startup-card_img' />
      </Link>

      <div className='flex-between mt-5 gap-3'>
        <Link href={`/?query=${category.toLowerCase()}`}>
          <p className="text-16-medium">{ category }</p>
        </Link>
        <button className="btn btn-outline btn-primary rounded-4xl">Details</button>
      </div>
    </li>
  )
}

export default StartupCard
