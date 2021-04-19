﻿using DasContract.Abstraction.Processes;
using DasContract.Abstraction.Processes.Events;
using DasContract.Abstraction.Processes.Gateways;
using DasContract.Abstraction.Processes.Tasks;
using DasContract.Editor.Web.Services.BpmnEvents.Exceptions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DasContract.Editor.Web.Services.Processes
{
    public static class ProcessElementFactory
    {
        public static ProcessElement CreateElementFromType(string type)
        {
            switch (type)
            {
                case "bpmn:StartEvent":
                    return new StartEvent();
                case "bpmn:EndEvent":
                    return new EndEvent();
                case "bpmn:Task":
                    return new Abstraction.Processes.Tasks.Task();
                case "bpmn:UserTask":
                    return new UserTask();
                case "bpmn:ScriptTask":
                    return new ScriptTask();
                case "bpmn:ServiceTask":
                    return new ServiceTask();
                case "bpmn:BusinessRuleTask":
                    return new BusinessRuleTask();
                case "bpmn:CallActivity":
                    return new CallActivity();
                case "bpmn:ParallelGateway":
                    return new ParallelGateway();
                case "bpmn:ExclusiveGateway":
                    return new ExclusiveGateway();
                default:
                    throw new InvalidCamundaElementTypeException($"{type} is not a valid element type");
            }
        }
    }
}
