

type statusProps = {
    status: 'loading' | 'success' | 'error'
}


export default function Status(props:statusProps) {


    let message 
    if(props.status==='loading')
        message = 'loading...'
    else if(props.status==='success')
        message = 'Data fetched successfully'
    else if(props.status==='error')
        message = 'Error fetched successfully'

    return (


    <div>

        <h2>{message}</h2>


    </div>
  )
}
