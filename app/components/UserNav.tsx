'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { DropdownMenuLabel } from '@radix-ui/react-dropdown-menu'
import { signOut } from 'next-auth/react'

interface iAppProps {
  name: string
  avatar?: string
  email: string
}

export default function UserNav ({ name, avatar, email }: iAppProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='relative h-10 w-10 rounded-sm'>
          <Avatar className='h-10 w-10 rounded-sm'>
            {avatar
              ? <AvatarImage src={avatar} />
              : (
                <AvatarImage src='https://lxsozdfjrurftcvxamro.supabase.co/storage/v1/object/public/user%20image/avatar.png' />
              )}
            <AvatarFallback className='rounded-sm'>
              {name.substring(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className='w-56 p-2' align='end' forceMount>
        <DropdownMenuLabel>
          <div className='flex flex-col space-y-1'>
            <p className='text-sm font-medium leading-none'>{name}</p>
            <p className='text-xs leading-none text-muted-foreground'>
              {email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut()} className='cursor-pointer'>
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
