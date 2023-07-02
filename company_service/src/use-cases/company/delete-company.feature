Feature: Delete Company.

  Scenario Outline: Try to delete company with invalid details, then it will throw error.
    Given Company details companyId: <companyId> to delete company
    When Try to delete company
    Then It will throw error: "<error>" with message: "<message>" while deleting company
    # And GetCompanysDetailByEmail function will call <getCompanysDetailByEmailFunctionCallCount> time while creating new company
    # And getCompanysDetailByMobile function will call <getCompanysDetailByMobileFunctionCallCount> time while creating new company
    # And encryptPassword function will call <encryptPasswordFunctionCallCount> time while creating new company
    # And createCompany function will call <createCompanyFunctionCallCount> time while creating new company
  Examples:
      | CompanyId      | error           | message                 |
      |                | Error           | '"companyId" is required'  |
                                    
Scenario Outline: Try to delete company with invalid company Id, then it will throw error.
    Given Company details companyId: <companyId> to delete company
    And  company id doesnt exist result:<companyDetailsBycompanyId>
    When Try to delete company 
    Then It will throw error: "<error>" with message: "<message>" while deleting company
    # And GetCompanysDetailByEmail function will call <getCompanysDetailByEmailFunctionCallCount> time while creating new company
    # And getCompanysDetailByMobile function will call <getCompanysDetailByMobileFunctionCallCount> time while creating new company
    # And encryptPassword function will call <encryptPasswordFunctionCallCount> time while creating new company
    # And createCompany function will call <createCompanyFunctionCallCount> time while creating new company
  Examples:
      | companyId          | error       |companyDetailsBycompanyId        | message                 |
      |     234        | Error        |  1                     | Company with this Id is doesn't exists  |
                                    
    
  Scenario Outline: Try to delete company with valid inputs, then it will deleted.
    Given Company details companyId: <companyId> to delete company
    #  And  company id  exist result:<deleteCompanyDetail>
    # And Encrypted password of provided password is: "<encryptedPassword>"
    When Try to delete company
    Then It will delete company with details: <message>
    # And GetCompanysDetailByEmail function will call <getCompanysDetailByEmailFunctionCallCount> time while creating new company
    # And getCompanysDetailByMobile function will call <getCompanysDetailByMobileFunctionCallCount> time while creating new company
    # And encryptPassword function will call <encryptPasswordFunctionCallCount> time while creating new company
    # And createCompany function will call <createCompanyFunctionCallCount> time while creating new company

    Examples:
      |     companyId |message|
      | 1 |'delete company successfully' | 