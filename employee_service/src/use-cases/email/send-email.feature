Feature: Creating new Email

    Scenario Outline: Try to send new email with invalid details, then it will throw error.
    Given Email details Mailmessage: "<message>",recipientEmailId:"<recipientEmailId>"
    When Try to send new email
    Then Throw error: "<error>" with message: "<message>" while creating a email

    Examples:
     |Mailmessage   |   recipientEmailId           | error           | message                                               |
     | ""           | vatsal@rapidops.com          | Error           | Validation error at sendEmail \"emailName\" is required                               |
     |              | vatsal@rapidops.com          | Error           | Validation error at sendEmail \"empDesignation\" is required                               |
     |              | vatsal@rapidops.com          | Error           | Validation error at sendEmail \"empCompanyId\" is required                            |
     |              | vatsal@rapidops.com          | Error           | Validation error at sendEmail \"emailName\" length must be at least 5 characters long |


    Scenario Outline: Valid inputs then send a Mail.
    Given Email details Mailmessage: "<message>",recipientEmailId:"<recipientEmailId>"
    When Try to send new email
    Then It will send new email with details: "<newEmailDetails>"

    Examples:
        | empname      | empdesg         | empemailId         |  newEmailDetails  |
        | Vatsal       | SE              | asdf-45fghj-fgh      |  '{id:1}'           |
