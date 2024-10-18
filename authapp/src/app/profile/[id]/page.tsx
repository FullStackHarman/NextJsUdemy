export default function userProfile({params}:any) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen  py-2 text-2xl">
            <h1>Profile</h1>
            <hr/>
            <p className="text-4xl "> Profile Page 
                <span className="text-2xl font-bold cursor-pointer ">{params.id}</span></p>
        </div>
    )
}