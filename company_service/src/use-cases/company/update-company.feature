Feature: update Company By Id.

  Scenario Outline: Try to update company with invalid details, then it will throw error.
    Given Company details name:'<name>' companyId: '<companyId>' to update company
    When Try to update company
    Then It will throw error: '<error>' with message: '<message>' while updating company
    # And GetCompanysDetailByEmail function will call <getCompanysDetailByEmailFunctionCallCount> time while creating new company
    # And getCompanysDetailByMobile function will call <getCompanysDetailByMobileFunctionCallCount> time while creating new company
    # And encryptPassword function will call <encryptPasswordFunctionCallCount> time while creating new company
    # And createCompany function will call <createCompanyFunctionCallCount> time while creating new company
  Examples:
      | companyId |name          | error           | message                 |
      |        | vatsal     | Error             | \"id\" is required  |
      | 23     |           | Error           | \"name\" is required    |
      |abc     |  vatsal   | Error              | \"id\" must be a number|
      |50      | vatsal    | Error              |  company does not Exists|

 Scenario Outline: Invalid companyName input then throw error.
    Given Second Enter companyid: <companyid> and updated companyname: <companyName> for updating a company
    When Try to update company
    Then It will throw error: '<error>' with message: '<message>' while updating company

    Examples:
        |   companyid   |    companyName     | error       | message                       |
        # Invalid scenarios
        |   32       |  12345       | Error       |\"name\" must be a string    |


Scenario Outline: Try to update company with valid inputs, then it will success.
    Given Third Enter companyid: <companyId> and updated companyname: '<name>' for update a company
    When Try to update company
    Then update company successfully message:"<message>"

    Examples:
      |     companyId | name         |message|
      |      1        |  vatsal      | update company successfully | 