import React from 'react'
import { twMerge } from 'tailwind-merge'
import CypressHomeIcon from '../icons/cypressHomeIcon'
import CypressSettingsIcon from '../icons/cypressSettingsIcon'
import Settings from '../settings/settings'


interface NativeNavigationProps {
  myWorkspaceId: string
  className?: string
}

const NativeNavigation: React.FC<NativeNavigationProps> = ({
  myWorkspaceId,
  className,
}) => {
  return (
    <nav className={twMerge('my-2', className)}>
      <ul className="flex flex-col gap-2">
        <li className="group/native flex text-Neutrals/neutrals-7 transition-all gap-2 cursor-pointer ">
          <CypressHomeIcon />
          <span>My Workspace</span>
        </li>

        <Settings>
          <li className="group/native flex text-Neutrals/neutrals-7 transition-all gap-2 cursor-pointer">
            <CypressSettingsIcon />
            <span>Settings</span>
          </li>
        </Settings>

        {/* <Trash>
          <li className="group/native flex text-Neutrals/neutrals-7 transition-all gap-2">
            <CypressTrashIcon />
            <span>Trash</span>
          </li>
        </Trash>  */}
      </ul>
    </nav>
  )
}

export default NativeNavigation
