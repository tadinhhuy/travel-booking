'use client';
import { useState } from 'react';
import clsx from 'clsx';
import {
  BellIcon,
  ChatBubbleBottomCenterTextIcon,
  GlobeAltIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/24/outline';

type MenuTypes = 'placesToStay' | 'experiences' | 'discover';

const MenuItem = ({
  type,
  selected,
  children,
  onClick,
}: {
  selected: boolean;
  type: MenuTypes;
  children: React.ReactNode;
  onClick: (menuItem: MenuTypes) => void;
}) => {
  return (
    <div
      onClick={() => onClick(type)}
      className={clsx(
        selected ? 'text-primary-600 font-bold' : 'text-neutral-650',
        'hover:text-primary-600 active:text-primary-600',
        'cursor-pointer'
      )}
    >
      {children}
    </div>
  );
};

const Header = () => {
  const [menuItemSelected, setMenuItemSelected] =
    useState<MenuTypes>('placesToStay');

  const handleSelectMenuItem = (menuItem: MenuTypes) => {
    setMenuItemSelected(menuItem);
  };

  return (
    <div className="flex items-center absolute h-[70px] shadow-sm top-0 w-full px-5 justify-between">
      <div className="flex gap-10 items-center">
        <div>
          <PaperAirplaneIcon className="w-8 h-8 font-bold text-primary" />
        </div>
        <div className="flex gap-8">
          <MenuItem
            selected={menuItemSelected === 'placesToStay'}
            type="placesToStay"
            onClick={handleSelectMenuItem}
          >
            Places to stay
          </MenuItem>
          <MenuItem
            selected={menuItemSelected === 'experiences'}
            type="experiences"
            onClick={handleSelectMenuItem}
          >
            Experiences
          </MenuItem>
          <MenuItem
            selected={menuItemSelected === 'discover'}
            type="discover"
            onClick={handleSelectMenuItem}
          >
            Discover
          </MenuItem>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <div className="font-bold text-xs text-neutral-900">USD</div>
        <div>
          <GlobeAltIcon className="h-4 w-4" />
        </div>
        <div>
          <ChatBubbleBottomCenterTextIcon className="h-4 w-4" />
        </div>
        <div>
          <BellIcon className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
};

export default Header;
