const Home = () => {
  return (
    <div style={{ height:'85vh', padding: '20px' , display: 'flex', flexDirection: 'column',
      justifyContent:'center', alignItems: 'center',background: 'linear-gradient(to right,rgba(0, 0, 0, 0.7),rgba(235, 46, 46, 0.7))',color: 'white'
    }}>
      <h1>Welcome to Our Website</h1>
      <p style={{fontSize: '1.2rem'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus architecto nobis rerum exercitationem debitis facilis at, libero ducimus hic modi maxime voluptate tenetur quisquam labore autem nemo quos laudantium placeat!</p>
      <button style={{width: '200px', marginTop: '10px',backgroundColor: 'transparent',
        border: '1px solid blue',color: 'blue',borderRadius: '5px',padding: '10px 20px', cursor: 'pointer'
      }}>Explore More !!!</button>
    </div>
  );
};

export default Home;
