import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import { ReactNode } from 'react'

type OptionType = {
  value: string
  label: string
  component: ReactNode
}

type TabsGroupProps = {
  options: OptionType[]
}

export function TabsGroup({ options }: TabsGroupProps) {
  return (
    <Tab.Group className="w-full">
      <Tab.List className="mb-4 flex rounded-md bg-gray-100 p-1">
        {options.map((option) => (
          <Tab
            key={option.value}
            className={({ selected }) =>
              clsx(
                'w-full cursor-pointer rounded-lg py-2 text-sm leading-5 font-medium transition-all duration-200 ease-in-out',
                selected
                  ? 'scale-105 transform bg-white font-bold text-black shadow'
                  : 'text-gray-500 hover:scale-102 hover:bg-white/70'
              )
            }
          >
            {option.label}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels className="relative">
        {options.map((option) => (
          <Tab.Panel
            key={option.value}
            className="absolute inset-0 transform transition-all duration-300 ease-in-out data-[headlessui-state=invisible]:translate-y-4 data-[headlessui-state=invisible]:opacity-0 data-[headlessui-state=selected]:opacity-100"
          >
            {option.component}
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}
