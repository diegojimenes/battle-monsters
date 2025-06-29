import * as St from "./styles"

export const Log = ({
    logs
}: {
    logs: string[]
}) => {
    return <St.container className="log">
        <St.Title>
            Log de Luta:
        </St.Title>
        <St.logWrapper>
            {
                logs?.map((log) => {
                    return <St.logItem key={log.replaceAll(' ', '')}>{log}</St.logItem>
                })
            }
        </St.logWrapper>
    </St.container>
}









