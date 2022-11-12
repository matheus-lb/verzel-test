

export const goToHomePage =(navigate)=>{ 
    navigate("/");
}
export const goToAdminPage=(navigate)=>{ 
    navigate("/admin");
}
export const goToDetails=(navigate, id)=>{ 
    navigate(`/${id}`);
}
export const goToReturn=(navigate)=>{ 
    navigate(-1);
}