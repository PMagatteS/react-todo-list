export const cardStyle = {
    card: {width: "100%", marginBottom: "3px"},
    cardBox: {display:"flex"},
    cardTypography: {flexGrow:1, margin:"auto"},
    trashIcon: {color: "red", margin:"auto", cursor:"pointer"}
}

export const formStyle = { 
   formBox : {
    padding: 5,
    bgcolor: 'background.paper',  
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: ["90%",600,500],
    width: ["90%",400,400],
    display: "flex",
    flexDirection: "column",
    gap: ["50px", "100px", "100px"],
},
    

    closeButton: {
        display: [null, "none", "none"],
        position: "absolute",
        top: 10,
        right: 10,
    },
    
}

export const navbarStyle={
    addButton: {
        display: ["none", "block", "block"],

    },

    addButtonMobile:{
        display: [null, "none", "none"],
        position: "fixed",
        bottom: "15%",
        right: 10,

    },
    
    burgerMenu:{
        display: [null, "none", "none"],

    },
}

export const taskTable = {
    display : "flex",
    marginTop: "100px",
}