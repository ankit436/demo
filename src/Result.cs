

public class APIResult<T>

{

    public bool Success { get; set; }

    public string Message { get; set; }

    public T Data { get; set; }

    public string Error { get; set; }

    public APIResult(bool success, string message, T data, string error)

    {

        Success = success;

        Message = message;

        Data = data;

        Error = error;

    }

    public APIResult(bool success, string message, T data)

        : this(success, message, data, null)

    {

    }

    public APIResult(bool success, string error)

        : this(success, null, default(T), error)

    {

    }

}
