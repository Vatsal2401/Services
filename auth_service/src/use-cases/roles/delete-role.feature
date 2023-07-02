Feature: Delete a Role

    Scenario Outline: Invalid or empty inputs then throw error for deleting role.
    Given Enter roleId: "<roleId>" to delete a role
    When Try to delete a role
    Then Throw error: "<error>" with message: "<message>" while deleting a role
    Examples:
        # Invalid scenarios
        | roleId           | error                   | message                        |
        |                  | ValidationError         | "\"id\" is required"           |
        | sdfgh-ghjkl56    | ValidationError         | "\"id\" must be a valid GUID"  |



    Scenario Outline: Valid inputs then delete the role.
    Given Enter roleId: '<roleId>' to delete a role
    When Try to delete a role
    Then Show message: "<message>"
    
    Examples:
        | roleId                | message                     |
        # Invalid scenarios
        | d8cfe36a-81f5-4d96-8a54-4ac923cb012c         | Deleted the role succesfully          |