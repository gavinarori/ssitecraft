'use client'

import ComponentPreview from './ComponentPreview'

export default function CollectionList({ componentsData, componentContainer }:any) {
  return (
    <div className="not-prose mx-auto xl:max-w-[1348px]">
      <ul className="space-y-8 lg:space-y-12">
        {componentsData.map((componentData:any) => (
          <li key={componentData.id}>
            <ComponentPreview
              componentData={componentData}
              componentContainer={componentContainer}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
