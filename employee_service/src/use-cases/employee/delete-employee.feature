Feature: Delete a Employee

    Scenario Outline: Invalid or empty inputs then throw error for deleting employee.
    Given Enter employee id: "<employeeId>" to delete a employee
    When Try to delete a employee
    Then Throw error: "<error>" with message: "<message>" while deleting a employee
    

    Examples:
        # Invalid scenarios
        | employeeId       | error         | message                    |
        |                  | ValidationError         | Validation error at deleteEmployee \"employeeId\" is required         |
        | sdfgh-ghjkl56    | ValidationError         | No such employee is there, you are trying to delete...  |



    Scenario Outline: Valid inputs then delete the employee.
    Given Enter employee id: '<employeeid>' to delete a employee
    When Try to delete a employee
    Then Show message: "<message>"
    

    Examples:
        | employeeid            | message                     |
        # Invalid scenarios
        | sdfgh-ghjkl35         | Deleted the employee succesfully          |