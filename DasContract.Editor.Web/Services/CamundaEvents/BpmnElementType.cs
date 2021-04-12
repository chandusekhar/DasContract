﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DasContract.Editor.Web.Services.CamundaEvents
{
    public enum BpmnElementType
    {
        StartEvent,
        EndEvent,
        Task,
        ScriptTask,
        ServiceTask,
        UserTask,
        ExclusiveGateway,
        ParallelGateway
    }
}
