import styled from "styled-components";

const Head = styled.section`
    max-width: max(1000px, 100% - 100px);
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p{
       font-size: 25px;
       font-weight: bold;
    }


    div{
        display: flex;
        align-items: center;
        padding: 0 5px;

        button{
            height: 25px;
            padding: 0 10px;
            margin-left: 10px;
            border: none;
            border-radius: 2px;
            background-color: #51b5b1;
            color: #ffff;
        }
    }

`        
const Header = () => {
    return (
        <Head>
            <img src="/assets/SVCClogo.png"  alt="SVCC logo" width="100" height="25"/>
            <p>Silicon Valley Code Camp</p>
            <div>
                <h4>Hello Popescu!</h4>
                <button>Sign-out</button>
            </div>
        </Head> 
    )
}


export default Header;