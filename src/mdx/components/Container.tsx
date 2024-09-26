export default function Container({ children, id, classNames }:any) {
  return (
    <div id={id} className={`mx-auto max-w-screen-xl px-4 ${classNames}`}>
      {children}
    </div>
  )
}
