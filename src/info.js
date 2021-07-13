export default  function Info(){
    const title = "this is my title";
    const showTitle = true;

    if (showTitle){
        return(
            <div>
                <h1>{title}</h1>
                <p>Manage yout stuff.</p>
            </div>
        );
        
    }else {
        return <p>Empty</p>
    }
}