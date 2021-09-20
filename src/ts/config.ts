export interface IConfig {
    authServer: string,
}

export async function getConfig(): Promise<IConfig> {
    let fetched = await fetch('/config.json', {
        method: 'GET'
    })

    switch(fetched.status) {
        case 200:
            let json = await fetched.json()
            return <IConfig> json
        default:
            alert('Failed to load configuration')
            throw new Error('Failed to load configuration')
    }
}