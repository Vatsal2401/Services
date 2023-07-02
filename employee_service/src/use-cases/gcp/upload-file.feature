Feature: Upload File 

    Scenario Outline: Try to upload file with invalid details, then it will throw error.
    Given Upload File Details fileName:"<fileName>",bucketName:"<bucketName>"  to upload file
    When Try to upload new file
    Then Throw error:"<error>" with message:"<message>" while uploading file

    Examples:
        |    fileName | bucketName           |  error                        | message                                               |
        |             |                      | ValidationError               |  \"employeeName\" is required                      |
        | vatsal.jpg  |                      | ValidationError               |  \"employeeEmail\" is required                          |
        | vatsal.jpg  |   experoo-dev        | ValidationError               | \"password\" is required                           |




    Scenario Outline: Valid inputs then upload file.
    Given Upload File Details fileName:"<fileName>",bucketName:"<bucketName>"  to upload file
    When Try to upload new file
    Then It will upload file with details: "<newUploadDetails>"

    Examples:
        | fileName     | bucketName     |  newUploadDetails  |
        | Vatsal       | experoo-dev    |     successfull               |
