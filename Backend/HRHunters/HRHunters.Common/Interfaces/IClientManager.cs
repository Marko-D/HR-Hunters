﻿using HRHunters.Common.Entities;
using HRHunters.Common.Enums;
using HRHunters.Common.Requests;
using HRHunters.Common.Requests.Admin;
using HRHunters.Common.Requests.Users;
using HRHunters.Common.Responses;
using HRHunters.Common.Responses.AdminDashboard;
using HRHunters.Data;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace HRHunters.Common.Interfaces
{
    public interface IClientManager : IBaseManager
    {
        ClientResponse GetMultiple(SearchRequest request);
        GeneralResponse UpdateClientStatus(int id, ClientStatusUpdate statusUpdate);
        Task<GeneralResponse> UpdateClientProfile(int id, ClientUpdate clientUpdate);
        Task<GeneralResponse> CreateCompany(NewCompany newCompany);
        ClientInfo GetOneClient(int id);
        Task<GeneralResponse> UpdateCompanyLogo(FileUpload fileUpload);
    }
}
