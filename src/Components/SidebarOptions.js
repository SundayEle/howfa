import '../styles/sidebarOptions.scss'

 function SidebarOptions(props) {

  const {
   active,
   text,
   Icon
  } = props;
 return (
  <div className={`sidebarOptions ${active && 'sidebarOptions--active'}`}>
   <Icon />
   <h2>{text}</h2>
  </div>
 );
}

export default SidebarOptions
