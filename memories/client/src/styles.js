import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 5,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px', // Add padding to create space around the navigation
    background: '#bce7b9', // Change the background color
  },
  heading: {
    color: '#0a0808', // Change the heading color
  },
  navbar: {
    background: '#bce7b9',
    padding: '10px 20px', // Add padding to create space around the navigation
    display: 'flex',
    justifyContent: 'flex-end', // Move the navigation to the right
    fontWeight:'bold',
  },
  navbarUl: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'flex-end',
    // Use flexbox to align items horizontally
  },
  navbarLi: {
    marginLeft: '10px',
  },
  navbarLink: {
    color: '#0a0808',
    textDecoration: 'none',
  },
  left: {
    float: 'left',
  },
}));
