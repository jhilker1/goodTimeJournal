import Sidebar from './Sidebar.js';
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'

const layoutStyle = {
  margin: 20,
  padding: 20,
 // border: '2px solid #000000',
  //outline: '#000000 solid 10000000000px',
}

// imports Header pages in the layoutStyle above, index will import this
export default function Layout(props) {
  return (
     <div>
       <Sidebar />
       <Box>

       <Container>
       <div style={layoutStyle}>
         {props.children}
       </div>
       </Container>
      </Box>
     </div>
  );
}