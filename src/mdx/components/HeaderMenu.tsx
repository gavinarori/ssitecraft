import IconMenu from './IconMenu'
import MenuLinks from './HeaderMenuLinks'

export default function HeaderMenu({ showMenu, handleSetShowMenu, menuLinks }:any) {
  return (
    <div className="flex items-center md:hidden">
      <button onClick={() => handleSetShowMenu(!showMenu)} className="text-gray-900">
        <IconMenu />

        <span className="sr-only">Toggle menu</span>
      </button>

      {showMenu && (
        <div className="absolute inset-x-0 top-14 px-2">
          <MenuLinks
            menuLinks={menuLinks}
            navClass="bg-white border p-4 border-gray-200 shadow-lg rounded-md"
            ulClass="space-y-4"
          />
        </div>
      )}
    </div>
  )
}
