const UserProfile = (props) => {
  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
      <h2 style={{ color: 'blue' }}>{props.name}</h2>
      <p>Age: <span style={{ fontWeight: 'bold',color:'lightblue' }}> {props.age}</span></p>
      <p>Bio: <span style={{ fontWeight: 'bold',color:'lightblue' }}> {props.bio}</span></p>
    </div>
  );
};

export default UserProfile;
