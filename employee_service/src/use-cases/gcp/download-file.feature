Feature: Download File 

    Scenario Outline: Try to download file with invalid details, then it will throw error.
    Given Download File Details fileName:"<fileName>",bucketName:"<bucketName>"  to download file
    When Try to download new file
    Then Throw error:"<error>" with message:"<message>" while downloading file

    Examples:
        |    fileName | bucketName           |  error                        | message                                               |
        |             |                      | ValidationError               |  \"employeeName\" is required                      |
        | vatsal.jpg  |                      | ValidationError               |  \"employeeEmail\" is required                          |
        | vatsal.jpg  |   experoo-dev        | ValidationError               | \"password\" is required                           |


    Scenario Outline: Valid inputs then download file.
    Given Download File Details fileName:"<fileName>",bucketName:"<bucketName>"  to download file
    When Try to download new file
    Then It will download file with details: "<newDownloadDetails>"

    Examples:
        | fileName     | bucketName     |  newDownloadDetails  |
        | Vatsal       | experoo-dev    |     successfull               |
