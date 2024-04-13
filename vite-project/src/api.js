const token = "bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck"

export async function getTodoes() {
    const response = await fetch (
        "https://wedev-api.sky.pro/api/kanban",{
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
    const responseData = await response.json();
    return responseData
}


//войти
export async function logon({login,password}) {
    const response = await fetch (
        "https://wedev-api.sky.pro/api/user/login",{
            method: "POST",
            body: JSON.stringify({
                login,
                password
              })
        }
    )
    const responseData = await response.json()
    return responseData
}

export async function authorize({name,login,password}) {
    const response = await fetch (
        "https://wedev-api.sky.pro/api/user",{
            method: "POST",
            body: JSON.stringify({
                name,
                login,
                password
              })
        }
    )
    const responseData = await response.json()
    return responseData
}